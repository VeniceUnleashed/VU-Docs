---
title: EntityInteractionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| EntityInteractionComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| EntityInteractionComponentData(EntityInteractionComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| EntityInteractionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/).                      |
| EntityInteractionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/).                    |
| EntityInteractionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/).              |
| EntityInteractionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/). |

## Properties

| Name                                    | Type                                         | Description |
| --------------------------------------- | -------------------------------------------- | ----------- |
| pickupRadius                            | number                                       |             |
| maxAmmoPickupTimer                      | number                                       |             |
| maxAmmoCrateTimer                       | number                                       |             |
| interactWithTypes                       | [InteractionTypesData](/vext/ref/fb/interactiontypesdata/) |             |
| maxLookAtAngle                          | number                                       |             |
| soldierInteractRadius                   | number                                       |             |
| soldierInteractInputAction              | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| allowInteractionWithSoldiers            | bool                                         |             |
| onlyAllowInteractionWithManDownSoldiers | bool                                         |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
