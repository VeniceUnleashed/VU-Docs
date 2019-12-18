---
title: TicketCounterEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TicketCounterEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| TicketCounterEntityData(TicketCounterEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TicketCounterEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TicketCounterEntityData](TicketCounterEntityData).                    |
| TicketCounterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TicketCounterEntityData](TicketCounterEntityData).              |
| TicketCounterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TicketCounterEntityData](TicketCounterEntityData).                            |
| TicketCounterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TicketCounterEntityData](TicketCounterEntityData).                    |
| TicketCounterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TicketCounterEntityData](TicketCounterEntityData).              |
| TicketCounterEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TicketCounterEntityData](TicketCounterEntityData). |

## Properties

| Name                               | Type                                               | Description |
| ---------------------------------- | -------------------------------------------------- | ----------- |
| ticketPercentages                  | [TicketCountPercentage](TicketCountPercentage)\[\] |             |
| ticketLossPerMin                   | number                                             |             |
| decreaseTickets                    | [TicketDecreaseType](TicketDecreaseType)           |             |
| teamId                             | [TeamId](TeamId)                                   |             |
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
| [TicketCounterEntityData](TicketCounterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TicketCounterEntityData](TicketCounterEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
