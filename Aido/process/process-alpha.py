from PIL import Image

link = '../Image/'
name = 'BackgroundGrid'
dot = '.png'
url = link+name+dot
url_save = link+name+'_Alpha'+dot
alpha = 80

img = Image.open(url)
pixel = img.load()

new_img = Image.new('RGBA',img.size)
new_pixel = new_img.load()

for i in range(img.size[0]):
    for j in range(img.size[1]):
        r,g,b = pixel[i,j]
        a = 1
        if (a!=0): new_pixel[i,j] = (r,g,b,alpha)
        else: new_pixel[i,j] = (r,g,b,0)

# new_img.show()
new_img.save(url_save)
