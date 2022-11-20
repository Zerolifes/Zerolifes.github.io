from PIL import Image

link = '../Image/'
name = 'letter'
dot = '.png'
url = link+name+dot
url_save = link+name+'_Resize'+dot
size = (16,16)

img = Image.open(url)
new_img = img.resize(size)

new_img.save(url_save)
new_img.show() 


