from PIL import Image

link = '../Image/'
name = 'gift'
dot = '.png'
url = link+name+dot
url_save = link+name+dot

img = Image.open(url)
new_img = img.convert('L')

new_img.show()
new_img.save(url_save)
