<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PepsiCoSubsController extends AbstractController
{
    /**
     * @Route("/pepsi/co/subs", name="pepsi_co_subs")
     */
    public function index(): Response
    {
        return $this->render('pepsi_co_subs/index.html.twig', [
            'controller_name' => 'PepsiCoSubsController',
        ]);
    }
}
