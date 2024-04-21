package ru.khuzintka.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ru.khuzintka.app.model.Movie;
import ru.khuzintka.app.repository.MovieRepository;

@Component
public class DataLoader implements CommandLineRunner {

    private MovieRepository movieRepository;

    @Autowired
    public DataLoader(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("> Start loading data");

        movieRepository.save(new Movie(0L, "The Departed", "2006", "https://i.pinimg.com/736x/09/18/78/0918789b8c8c9d122fb0f91e8bd99805.jpg", true));
        movieRepository.save(new Movie(1L, "A Clockwork Orange", "1971", "https://i.pinimg.com/736x/5e/ab/a1/5eaba18fe97e96062936e73f2b83e74c.jpg", false));
        movieRepository.save(new Movie(2L, "The Green Mile", "1999", "https://i.pinimg.com/736x/c9/26/84/c926845006d9b78dbe9df5a9819f976f.jpg", false));
        movieRepository.save(new Movie(3L, "Fight Club", "1999", "https://i.pinimg.com/736x/30/9c/22/309c2288aa918929fbafd496d824e214.jpg", true));
        movieRepository.save(new Movie(4L, "Pulp Fiction", "1994", "https://i.pinimg.com/736x/d0/c9/0d/d0c90d904754ba64f6e8ddfc5521adfe.jpg", true));
        movieRepository.save(new Movie(5L, "Shutter Island", "2010", "https://i.pinimg.com/736x/56/82/ba/5682ba8ac3da9bc0e5258a9f65bf2ba5.jpg", true));
        movieRepository.save(new Movie(6L, "American Psycho", "2000", "https://i.pinimg.com/736x/4c/b1/9d/4cb19d5b89ccc0dd61112d3231d17ee7.jpg", false));
        movieRepository.save(new Movie(7L, "Drive", "2011", "https://i.pinimg.com/736x/ba/2b/98/ba2b98ad7f34a718dc6dc29220e802b1.jpg", false));
        movieRepository.save(new Movie(8L, "The Godfather", "1972", "https://i.pinimg.com/736x/58/c8/ec/58c8ec01eb9f293fb5d1c7b81f2d5055.jpg", false));
        movieRepository.save(new Movie(9L, "The Hangover", "2009", "https://i.pinimg.com/736x/21/c6/46/21c64618f9f89d71478bd87358b6a49c.jpg", false));
        movieRepository.save(new Movie(10L, "The Mask", "1994", "https://i.pinimg.com/736x/6b/68/b7/6b68b7fcc15348cc5b37cf0bf4535c64.jpg", false));
        movieRepository.save(new Movie(11L, "Monsters, Inc.", "2001", "https://i.pinimg.com/736x/dd/b0/aa/ddb0aae273fc1f952057f82d5da7f8ed.jpg", false));
        movieRepository.save(new Movie(12L, "Shaun of the Dead", "2004", "https://i.pinimg.com/736x/ff/98/9a/ff989a1af1de0463e2e3e4741dc12c07.jpg", true));
        movieRepository.save(new Movie(13L, "(500) Days of Summer", "2009", "https://i.pinimg.com/736x/22/dd/5b/22dd5b3771f3a633eeb3cd678f429348.jpg", false));
        movieRepository.save(new Movie(14L, "The Curious Case of Benjamin Button", "2008", "https://i.pinimg.com/736x/f4/d1/a3/f4d1a318074783b7c89ecf1e069b1ee3.jpg", false));
        movieRepository.save(new Movie(15L, "Zombieland", "2009", "https://i.pinimg.com/736x/8a/26/0e/8a260ee298b3d3adbddb3468c2aeadbd.jpg", false));
        movieRepository.save(new Movie(16L, "Kill Bill: Vol. 1", "2003", "https://i.pinimg.com/736x/69/f1/29/69f1295d6786e40520bb4a1f4c97244d.jpg", false));
        movieRepository.save(new Movie(17L, "Back to the Future", "1985", "https://i.pinimg.com/736x/8e/8d/dc/8e8ddc5fb94cb79ad6f84bfbe99c0b87.jpg", true));
        movieRepository.save(new Movie(18L, "Coraline", "2009", "https://i.pinimg.com/736x/62/9a/2e/629a2ec171eb85a8aff419f844346aa2.jpg", false));
        movieRepository.save(new Movie(19L, "Jaws", "1975", "https://i.pinimg.com/736x/f7/c0/a0/f7c0a00bfe3b9f049ce87f4fc1b76696.jpg", false));
        movieRepository.save(new Movie(20L, "Seven", "1995", "https://i.pinimg.com/736x/c8/50/29/c85029176836d1a95fc1491dcc1ec79a.jpg", true));
        movieRepository.save(new Movie(21L, "The Shining", "1980", "https://i.pinimg.com/736x/98/46/d9/9846d97cfa5346fbbedfa3c54819ab4a.jpg", false));

        System.out.println("> Finish loading data");
    }
}
