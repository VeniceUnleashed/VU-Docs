---
title: EntityInteractionComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| EntityInteractionComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| EntityInteractionComponentData(EntityInteractionComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| EntityInteractionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [EntityInteractionComponentData](EntityInteractionComponentData).                      |
| EntityInteractionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EntityInteractionComponentData](EntityInteractionComponentData).                    |
| EntityInteractionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EntityInteractionComponentData](EntityInteractionComponentData).              |
| EntityInteractionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityInteractionComponentData](EntityInteractionComponentData). |

## Properties

| Name                                    | Type                                         | Description |
| --------------------------------------- | -------------------------------------------- | ----------- |
| pickupRadius                            | number                                       |             |
| maxAmmoPickupTimer                      | number                                       |             |
| maxAmmoCrateTimer                       | number                                       |             |
| interactWithTypes                       | [InteractionTypesData](InteractionTypesData) |             |
| maxLookAtAngle                          | number                                       |             |
| soldierInteractRadius                   | number                                       |             |
| soldierInteractInputAction              | [EntryInputActionEnum](EntryInputActionEnum) |             |
| allowInteractionWithSoldiers            | bool                                         |             |
| onlyAllowInteractionWithManDownSoldiers | bool                                         |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EntityInteractionComponentData](EntityInteractionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntityInteractionComponentData](EntityInteractionComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
