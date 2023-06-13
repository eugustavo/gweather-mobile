
<p  align="center">
	<img  alt="GWeather Logo"  src="https://github.com/eugustavo/github-badges/assets/25755550/3ad4ee05-7271-4063-94af-a7cb1c233abe"  width="100px" />
</p>

<div>
  <img  alt="GWeather iOS"  src="https://github.com/eugustavo/gweather-mobile/assets/25755550/c438f31e-a8f7-490e-891c-059991c99a71" />
  <img  alt="GWeather Android"  src="https://github.com/eugustavo/gweather-mobile/assets/25755550/90e31147-6e55-4489-af06-265ba221a766" />
</div>


## 💻 Projeto
Esse projeto é um desafio técnico para um vaga de desenvolvedor.

Tecnologias utilizadas

 - [x] React Native CLI
 - [x] NativeBase
 - [x] Dayjs
 - [x] Redux
 - [x] Typescript
 - [x] Axios
 - [x] Geolocation
 - [x] [WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com/)
  
## 🔐 Variáveis ambientes
Esse projeto requer 2 API Keys:

 - API Key do Google Maps disponibilizada via Google Cloud, acesse a documentação da lib [aqui](https://github.com/FaridSafi/react-native-google-places-autocomplete) e siga o passo a passo.
 - API Key do WeatherAPI disponibilizada pela RapidAPI, visite o site [aqui](https://rapidapi.com/weatherapi/api/weatherapi-com/), faça seu cadastro e obtenha a API Key.

Após conseguir as 2 API Keys, troque o nome do arquivo `.env.example` para `.env` e cole as API Keys em suas devidas variáveis.

## 🚀 Instalação e execução

Para clonar e executar a aplicação, você precisará ter instalado em sua máquina o [Git](https://git-scm.com), [Node.js](https://nodejs.org) + [Yarn](https://yarnpkg.com) . Com todos os programas instalados, execute as seguintes linhas de comando:

### Android
```bash
# Clone esse repositório
$  git clone https://github.com/eugustavo/gweather-mobile

# Acesse o repositório
$  cd gweather-mobile

# Instale as dependências
$  yarn install

# Inicie a aplicação
$  yarn android
```

### iOS
```bash
# Clone esse repositório
$  git clone https://github.com/eugustavo/gweather-mobile

# Acesse o repositório
$  cd gweather-mobile

# Instale as dependências
$  yarn install

# Instale as dependências também via pod
$  cd ios && pod install

# Inicie a aplicação
$  yarn ios
```
