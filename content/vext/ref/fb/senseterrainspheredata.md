---
title: SenseTerrainSphereData
---
### Base Classes

[SphereData](/vext/ref/fb/spheredata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SenseTerrainSphereData()                                                          | Create a new instance of this container type.                                                                                       |
| SenseTerrainSphereData(SenseTerrainSphereData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SenseTerrainSphereData([SphereData](/vext/ref/fb/spheredata/) other)                            | Upcast an instance of type [SphereData](/vext/ref/fb/spheredata/) to [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/).                            |
| SenseTerrainSphereData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/).                      |
| SenseTerrainSphereData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/).                    |
| SenseTerrainSphereData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/).              |
| SenseTerrainSphereData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SenseTerrainSphereData](/vext/ref/fb/senseterrainspheredata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
