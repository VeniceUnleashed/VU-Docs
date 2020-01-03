---
title: FormationData
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| FormationData()                                                          | Create a new instance of this container type.                                                                     |
| FormationData(FormationData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| FormationData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FormationData](FormationData).              |
| FormationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FormationData](FormationData). |

## Properties

| Name      | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| positions | [Vec3](/vext/ref/shared/class/Vec3)\[\] |             |
| name      | string                                |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [FormationData](FormationData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FormationData](FormationData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
