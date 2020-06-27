import docx


doc = docx.Document("objetivosIntegrador3.docx")

result = [p.text for p in doc.paragraphs]
result = "".join(map(str,result))
print(result)
