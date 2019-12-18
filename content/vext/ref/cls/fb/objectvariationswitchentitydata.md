---
title: ObjectVariationSwitchEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ObjectVariationSwitchEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| ObjectVariationSwitchEntityData(ObjectVariationSwitchEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| ObjectVariationSwitchEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData).                            |
| ObjectVariationSwitchEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData).                    |
| ObjectVariationSwitchEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData).              |
| ObjectVariationSwitchEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData). |

## Properties

| Name       | Type                               | Description |
| ---------- | ---------------------------------- | ----------- |
| variation1 | [ObjectVariation](ObjectVariation) |             |
| variation2 | [ObjectVariation](ObjectVariation) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ObjectVariationSwitchEntityData](ObjectVariationSwitchEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
