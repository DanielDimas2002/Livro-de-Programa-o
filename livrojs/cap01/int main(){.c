int main(){

//criação das variáveis

char nome{50}; //uma variável do tipo “char” armazena apenas um caractere, por isso se coloca entre {} o número de caracteres máximo que pode ser acrescentado na variável.

int idade;

char sexo; // o sexo vai ser definido pelas letras M e F, para masculino e fneinimo, respectivamente.

char profissao{50};

float salario; // usa-se ‘float’ para se armazenar números com casas decimais, é o tipo mais recomendado.

//solicitação dos valores(ENTRADA)

printf("Preencha os campos abaixo./n");

//solicitação do nome
printf(“Nome: ”);
scanf(“%s, &nome”);//o “%s” é usado para armazenar mais de um caractere
fflush(stdin); // especificidade da linguagem C. Limpar buffer de entrada

//solicitação de idade

printf(“Idade: ”);
scanf(“%i”, &idade);
fflush(stdin);

//solicitação de sexo

printf(“Sexo: ”);
scanf(“%c”, &sexo);// o “%c” é usado para amazemnar apenas um caractere, logo, ela só vai capturar aprimeira letra digirado pelo usuário e salvar na variável
fflush(stdin);

//solicitação de profissão

printf(“Profissao: ”);
scanf(“%”, & profissao);
fflush(stdin)

//solicitação de salário

printf(“Salário: ”);
scanf(“%f”,&salario);// o “%f” é usado para representar valores com casa decimais.
fflush(stdin);


//exibição na tela (SAÍDA)

printf(“/nOla, %s. Segue abaixo os seus dados.”, nome);

printf(“/nIdade: %i anos”, idade);

printf(“/nSexo: %c”, sexo);

printf(“/nProfissao: %s”,profissao);

printf(“/nSalario: %f”, salario);


}
