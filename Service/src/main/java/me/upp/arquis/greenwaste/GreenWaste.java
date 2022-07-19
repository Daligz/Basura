package me.upp.arquis.greenwaste;

import me.upp.arquis.greenwaste.configuration.ServiceConfiguration;
import me.upp.arquis.greenwaste.services.Service;
import me.upp.arquis.greenwaste.services.ServicesStorage;
import me.upp.arquis.greenwaste.services.address.Address;
import me.upp.arquis.greenwaste.services.materials.Materials;
import me.upp.arquis.greenwaste.services.rewards.Rewards;
import me.upp.arquis.greenwaste.services.users.Users;
import me.upp.arquis.greenwaste.storages.Storage;
import spark.Spark;

public class GreenWaste {

    public static void main(final String[] args) {
        // Set port to service
        Spark.port(6969);
        new ServiceConfiguration().apply();
        final Storage<Service> services = new ServicesStorage(
                // Add here all services
                new Rewards(),
                new Users(),
                new Address(),
                new Materials()
        );
    }
}
