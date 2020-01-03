---
title: MobileSpawnComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MobileSpawnComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| MobileSpawnComponentData(MobileSpawnComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MobileSpawnComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [MobileSpawnComponentData](MobileSpawnComponentData).                      |
| MobileSpawnComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MobileSpawnComponentData](MobileSpawnComponentData).                    |
| MobileSpawnComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MobileSpawnComponentData](MobileSpawnComponentData).              |
| MobileSpawnComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MobileSpawnComponentData](MobileSpawnComponentData). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| parachuteSpawnRadiusMin | number |             |
| parachuteSpawnDistance  | number |             |
| nameSid                 | string |             |
| parachuteSpawnRadiusMax | number |             |
| enterMobileSpawnPoint   | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MobileSpawnComponentData](MobileSpawnComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MobileSpawnComponentData](MobileSpawnComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
