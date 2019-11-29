#include <LiquidCrystal.h> //Carrega a biblioteca LCD
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);//Define os pinos que serão ligados ao LCD

//Array simbolo grau
byte grau[8] ={ B00001100,
                B00010010,
                B00010010,
                B00001100,
                B00000000,
                B1111110,
                B00000000,
                B00000000,};
                
float temperatura;
int tempPin = 0;
void setup()
{
   Serial.begin(9600);
   lcd.begin(16,2); //Inicializa LCD
   lcd.clear(); //Limpa o LCD
   //Cria o caractere customizado com o simbolo do grau
   lcd.createChar(0, grau);
}


void loop()
{

  //Mostra o simbolo do grau formado pelo array
  lcd.write((byte)0);
  temperatura = (analogRead(tempPin) * 0.0048828125 * 100); //VARIÁVEL RECEBE A TEMPERATURA MEDIDA
  Serial.print("Temperatura = "); //IMPRIME O TEXTO NA SERIAL
  Serial.print(temperatura); //IMPRIME NA SERIAL A TEMPERATURA MEDIDA
  Serial.println(" C"); //IMPRIME O TEXTO NA SERIAL
  delay(2000); //INTERVALO DE 1 SEGUNDO (2000 MILISSEGUNDOS)

  lcd.setCursor(2,0);
  lcd.print("Temperatura: ");
  lcd.print(" ");
  lcd.setCursor(5,1);
  lcd.print(temperatura,1);
  lcd.setCursor(9,1);

}
