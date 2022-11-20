from PIL import Image

link = '../Image/'
name = 'leaf'
dot = '.png'
url = link+name+dot
url_save = link+name+'_Crop'+dot
area = (0,30,498,250)

img = Image.open(url)
new_img = img.crop(area)

new_img.show()
new_img.save(url_save)
