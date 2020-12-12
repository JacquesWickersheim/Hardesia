<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Accueil2Controller extends AbstractController
{
    /**
     * @Route("/accueil", name="accueil2")
     */
    public function index(): Response
    {
        return $this->render('accueil2/index.html.twig', [
            'titreSite' => 'Dessanco Life France'
        ]);
    }
}
