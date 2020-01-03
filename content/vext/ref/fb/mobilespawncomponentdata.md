---
title: MobileSpawnComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MobileSpawnComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| MobileSpawnComponentData(MobileSpawnComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MobileSpawnComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/).                      |
| MobileSpawnComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/).                    |
| MobileSpawnComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/).              |
| MobileSpawnComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/). |

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
| [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MobileSpawnComponentData](/vext/ref/fb/mobilespawncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
