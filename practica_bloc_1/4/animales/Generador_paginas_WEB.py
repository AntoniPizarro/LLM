import os
direccion = r""
archivo = input('Nombre archivo: ')
precio = input('Precio: ')
descripcion = input('Descripcion: ')
imagen = input('[1]peces  [2]corales  [3]invertebrados  ')
if imagen <= "1":
    imagen = "../resources/images/peces/"
elif imagen == "2":
    imagen = "../resources/images/corales/"
elif imagen >= "3":
    imagen = "../resources/images/invertebrados/"
nombre = archivo[0].upper() + archivo[1:archivo.find("-")] + " " + archivo[archivo.find("-") + 1].upper() + archivo[archivo.find("-") + 2:]
file = open(archivo + ".html", "w", encoding="utf-8")
file.write("<!DOCTYPE html>" + os.linesep)
file.write("<html lang=\"en\">" + os.linesep)
file.write("<head>" + os.linesep)
file.write("<meta charset=\"UTF-8\">" + os.linesep)
file.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" + os.linesep)
file.write("<title>Practica bloc 1</title>" + os.linesep)
file.write("<link rel=\"icon\" type=\"image/png\" href=\"../resources/images/logo.png\" />" + os.linesep)
file.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">" + os.linesep)
file.write("<link href=\"https://fonts.googleapis.com/css?family=Amaranth\" rel=\"stylesheet\">" + os.linesep)
file.write("</head>" + os.linesep)
file.write("<body>" + os.linesep)
file.write("<div class=\"img\" id=\"banner\">" + os.linesep)
file.write("<div>" + os.linesep)
file.write("<img src=\"../resources/images/logo.jpg\" height=\"230\">" + os.linesep)
file.write("</div>" + os.linesep)
file.write("<div class=\"text\">" + os.linesep)
file.write("<h1>Acuariofília marina</h1>" + os.linesep)
file.write("<p>Tienda y consejos</p>" + os.linesep)
file.write("</div>" + os.linesep)
file.write("<div class=\"menu\">" + os.linesep)
file.write("<a href=\"../index.html\">Inicio</a>" + os.linesep)
file.write("<a href=\"../catalogo.html\">Catálogo</a>" + os.linesep)
file.write("<a href=\"../index.html\">Ofertas</a>" + os.linesep)
file.write("</div>" + os.linesep)
file.write("</div>" + os.linesep)
file.write("<div class=\"producto\">" + os.linesep)
file.write("<img src=\"" + imagen + archivo + ".jpg\" alt=\"" + archivo + "\">" + os.linesep)
file.write("<div class=\"info\">" + os.linesep)
file.write("<h3>" + nombre + "</h3>" + os.linesep)
file.write("<h1>" + str(precio) + "€</h1>" + os.linesep)
file.write("<p>" + descripcion + "</p>" + os.linesep)
file.write("</div>" + os.linesep)
file.write("</div>" + os.linesep)
file.write("<footer>" + os.linesep)
file.write("" + chr(169) + " Diseñado y realizado por Antoni Pizarro 2020. Todos los derechos reservados." + os.linesep)
file.write("</footer>") + os.linesep
file.write("</body>" + os.linesep)
file.write("</html>")
file.close()