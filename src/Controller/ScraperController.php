<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DomCrawler\Crawler;

class ScraperController extends AbstractController
{
    /**
     * @Route("/scraper", name="scraper")
     */
    public function index(): Response
    {
        $html = file_get_contents('https://www.gecina.fr/fr/groupe/conseil-administration/');
        $crawler = new Crawler($html);
        $data = $crawler->filter('#header')->html();
        dd($data);

        return $this->render('scraper/index.html.twig', [
            'controller_name' => 'ScraperController',
        ]);
    }
}
