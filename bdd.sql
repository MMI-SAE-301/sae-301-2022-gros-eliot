--
-- code pour la création des tables
--


CREATE TABLE materiel (
    id_materiel uuid NOT NULL,
    libelle_materiel VARCHAR,
    url_materiel VARCHAR,
    PRIMARY KEY (id_materiel));

CREATE TABLE montre (
    id_montre uuid NOT NULL,
    libelle_montre VARCHAR,
    bracelet VARCHAR,
    boitier VARCHAR,
    ecran VARCHAR,
    commande bool,
    date_livraison date,

    id_materiel uuid,
    id_user uuid,
    PRIMARY KEY (id_montre),
    FOREIGN KEY (id_materiel) REFERENCES materiel (id_materiel),
    FOREIGN KEY (id_user) REFERENCES auth.users (id));


--
-- code pour la création des vues
--

CREATE VIEW allUsers AS
SELECT * From auth.users;

CREATE VIEW allMontre AS
select * FROM montre;

CREATE VIEW allMateriaux AS
select * FROM materiel;

CREATE VIEW montresUser as
select montre.* FROM montre, auth.users WHERE montre.id_user = auth.users.id;

CREATE VIEW materieauxChaussure as
select materiel.* FROM chaussure, materiel WHERE materiel.id_materiel = chaussure.id_materiel;


--
-- code pour la création des policies
--

CREATE POLICY "Enable read access for authenticated" ON "public"."montre"
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((uid() = id_user));

CREATE POLICY "Enable insert for authenticated users only" ON "public"."montre"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK ((uid() = id_user));

CREATE POLICY "Enable update for users authentificated IF NOT ordered" ON "public"."montre"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING ((uid() = id_user))
WITH CHECK ((commande = false));

