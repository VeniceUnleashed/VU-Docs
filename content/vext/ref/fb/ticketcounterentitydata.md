---
title: TicketCounterEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TicketCounterEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| TicketCounterEntityData(TicketCounterEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TicketCounterEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/).                    |
| TicketCounterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/).              |
| TicketCounterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/).                            |
| TicketCounterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/).                    |
| TicketCounterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/).              |
| TicketCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/). |

## Properties

| Name                               | Type                                               | Description |
| ---------------------------------- | -------------------------------------------------- | ----------- |
| ticketPercentages                  | [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage/)\[\] |             |
| ticketLossPerMin                   | number                                             |             |
| decreaseTickets                    | [TicketDecreaseType](/vext/ref/fb/ticketdecreasetype/)           |             |
| teamId                             | [TeamId](/vext/ref/fb/teamid/)                                   |             |
| ticketLossWhenLostAll              | number                                             |             |
| ticketLossWhenLostAllControlsPoint | number                                             |             |
| initialTicketCount                 | number                                             |             |
| ticketLossStart                    | number                                             |             |
| setBestSquadSpawner                | bool                                               |             |
| haltTicketLossOnEqualPointCount    | bool                                               |             |
| resetCapturePointsOnReset          | bool                                               |             |
| spawnAlwaysAllowed                 | bool                                               |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
