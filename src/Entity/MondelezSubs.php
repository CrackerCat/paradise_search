<?php

namespace App\Entity;

use App\Repository\MondelezSubsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MondelezSubsRepository::class)
 */
class MondelezSubs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $subs_id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $subs_name;

    /**
     * @ORM\Column(type="string", length=60)
     */
    private $subs_country;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubsId(): ?int
    {
        return $this->subs_id;
    }

    public function setSubsId(int $subs_id): self
    {
        $this->subs_id = $subs_id;

        return $this;
    }

    public function getSubsName(): ?string
    {
        return $this->subs_name;
    }

    public function setSubsName(string $subs_name): self
    {
        $this->subs_name = $subs_name;

        return $this;
    }

    public function getSubsCountry(): ?string
    {
        return $this->subs_country;
    }

    public function setSubsCountry(string $subs_country): self
    {
        $this->subs_country = $subs_country;

        return $this;
    }
}
