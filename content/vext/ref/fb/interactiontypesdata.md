---
title: InteractionTypesData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| InteractionTypesData()                           | Create a new instance of this structure type.            |
| InteractionTypesData(InteractionTypesData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type | Description |
| ------------------- | ---- | ----------- |
| interactionEntity   | bool |             |
| pickupEntity        | bool |             |
| ammoCrateEntity     | bool |             |
| vehicleEntity       | bool |             |
| explosionPackEntity | bool |             |
| soldierEntity       | bool |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [InteractionTypesData](InteractionTypesData) | [Clone](#clone) |            |

### Clone

> [InteractionTypesData](InteractionTypesData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
