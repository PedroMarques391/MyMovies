# MyMovies - API RESTful com TypeScript, Express

MyMovies é uma API RESTful desenvolvida com TypeScript e Express, seguindo o padrão de arquitetura MVC (Model-View-Controller). Ela oferece uma solução poderosa para gerenciar informações sobre filmes.

## Principais Funcionalidades

A API MyMovies possui as seguintes funcionalidades principais:

1. **Cadastro de Filmes**: Você pode facilmente cadastrar informações detalhadas de filmes, incluindo title, rating, description, director, stars, poster.

2. **Listagem de Filmes por ID**: Recupere informações de filmes específicos com base no ID.

3. **Edição de Filmes**: Atualize os detalhes de qualquer filme registrado.

4. **Exclusão de Filmes por ID**: Remova filmes da base de dados com base no ID.

4. **Exclusão de todos os Filmes**: Remova todos os filmes do banco de dados.

A API implementa validações rigorosas durante o cadastro de filmes. O objeto de filme deve conter as seguintes chaves:

- `title`
- `rating`
- `description`
- `director`
- `stars`
- `poster`

Apenas a chave `stars` é opcional. Além disso, o título deve ter mais de 5 letras, a avaliação deve estar dentro da faixa de 0 a 10 e o poster deve ser uma URL.

Para lidar com as validações, usei o pacote `express-validation`, garantindo que todos os dados inseridos estejam corretos e em conformidade com os critérios estabelecidos.

## Armazenamento em Banco de Dados

Todos os filmes cadastrados são salvos de forma segura no banco de dados MongoDB, garantindo a persistência das informações e permitindo a recuperação de dados sempre que necessário.

## Configuração

Para começar a utilizar a API MyMovies, siga os passos abaixo:

1. Clone o repositório para a sua máquina local.

   ```bash
   git clone https://github.com/seu-usuario/mymovies-api.git
   cd mymovies-api
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Configure a conexão com o banco de dados MongoDB de acordo com suas preferências no arquivo de configuração.

4. Inicie a API:

   ```bash
   npm start
   ```

A API MyMovies estará disponível para uso localmente.

## Contribuição

Estou abertos a contribuições! Se você encontrar bugs, desejar adicionar recursos ou melhorias, sinta-se à vontade para criar uma _issue_ ou um _pull request_ no repositório.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

Divirta-se utilizando a API MyMovies para gerenciar informações sobre seus filmes favoritos! 🍿🎥



