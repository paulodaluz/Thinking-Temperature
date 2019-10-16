from datetime import datetime;

airConditioning = False

peopleInsideOfPlace = 0

temperatura = 0

hora = datetime.now()

### Funções:
def ligaArcondicionado():
    airConditioning = True
    print('Ar condicionado Ligado!')

def desligarArcondicionado():
    airConditioning = False
    print('Ar condicionado Desligado!')


### Código
""" if peopleInsideOfPlace > 2:
    if temperatura > 28 or temperatura < 16:
        if hora < 22 or  hora > 8:
            ligaArcondicionado()

if hora > 22 or hora < 8:
    desligarArcondicionado() """

print(hora)