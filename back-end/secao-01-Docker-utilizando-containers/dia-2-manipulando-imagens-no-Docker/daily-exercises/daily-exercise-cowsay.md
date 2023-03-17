### Exercises dia 2: Manipulando Imagens no Docker

Praticando os comandos no terminal!

## _**Exercise - 1**_

- ### Crie um `Dockerfile` utilizando a `imagem` `chuanwen/cowsay`;

```dockerfile
FROM chuanwen/cowsay
```

<br>

## _**Exercise - 2**_

- ### Defina um `ENTRYPOINT` para a execução do comando;

```dockerfile
ENTRYPOINT [ "/usr/games/cowsay" ]
```

<br>

## _**Exercise - 3**_

- ### Utilize o `CMD` para definir uma mensagem padrão;

```dockerfile
CMD [ "I'm a cow!" ]
```

### Dockerfile:
```dockerfile
FROM chuanwen/cowsay
ENTRYPOINT ["/usr/games/cowsay"]
CMD ["I'm a cow!"]
```

## _**Exercise - 4**_

- ### Gere uma _build_ e execute um `container` baseado em sua `imagem` sem passar nenhum comando;

```powershell
docker image build -t cowsay .
```

<br>

## _**Exercise - 5**_

- ### Execute um novo `container` passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha;

```powershell

# execute with default message:
docker container run cowsay

# output:
 ________
< #TRYBE >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```powershell
# execute with another animal and with a custom message:
docker container run cowsay -f ghostbusters "Buuuuh!"

# output:
 ________
< Buuuuh >
 --------
          \
           \
            \          __---__
                    _-       /--______
               __--( /     \ )XXXXXXXXXXX\v.
             .-XXX(   O   O  )XXXXXXXXXXXXXXX-
            /XXX(       U     )        XXXXXXX\
          /XXXXX(              )--_  XXXXXXXXXXX\
         /XXXXX/ (      O     )   XXXXXX   \XXXXX\
         XXXXX/   /            XXXXXX   \__ \XXXXX
         XXXXXX__/          XXXXXX         \__---->
 ---___  XXX__/          XXXXXX      \__         /
   \-  --__/   ___/\  XXXXXX            /  ___--/=
    \-\    ___/    XXXXXX              '--- XXXXXX
       \-\/XXX\ XXXXXX                      /XXXXX
         \XXXXXXXXX   \                    /XXXXX/
          \XXXXXX      >                 _/XXXXX/
            \XXXXX--__/              __-- XXXX/
             -XXXXXXXX---------------  XXXXXX-
                \XXXXXXXXXXXXXXXXXXXXXXXXXX/
                  ""VXXXXXXXXXXXXXXXXXXV""
```

<br>

```powershell

# get list of animals available:
docker container run cowsay -l

# output:
Cow files in /usr/share/cowsay/cows:
apt beavis.zen bong bud-frogs bunny calvin cheese cock cower daemon default
dragon dragon-and-cow duck elephant elephant-in-snake eyes flaming-sheep
ghostbusters gnu head-in hellokitty kiss kitty koala kosh luke-koala
mech-and-cow meow milk moofasa moose mutilated pony pony-smaller ren sheep
skeleton snowman sodomized-sheep stegosaurus stimpy suse three-eyes turkey
turtle tux unipony unipony-smaller vader vader-koala www
Use of chdir('') or chdir(undef) as chdir() is deprecated at /usr/games/cowsay line 95.

```

```powershell

# execute with a dragon and a cow with a custom message:
docker container run cowsay -f dragon-and-cow "VQV TRYBE"

# output:
 ___________
< VQV TRYBE >
 -----------
                       \                    ^    /^
                        \                  / \  // \
                         \   |\___/|      /   \//  .\
                          \  /O  O  \__  /    //  | \ \           *----*
                            /     /  \/_/    //   |  \  \          \   |
                            @___@`    \/_   //    |   \   \         \/\ \
                           0/0/|       \/_ //     |    \    \         \  \
                       0/0/0/0/|        \///      |     \     \       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \     \__/        `/\      /                 ~-. _ .-~      /
             \____(oo)           *.   }            {                   /
             (    (--)          .----~-.\        \-`                 .~
             //__\\  \__ Ack!   ///.----..<        \             _ -~
            //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~
```