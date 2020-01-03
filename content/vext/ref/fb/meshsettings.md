---
title: MeshSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshSettings()                                                          | Create a new instance of this container type.                                                                   |
| MeshSettings(MeshSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshSettings](/vext/ref/fb/meshsettings/). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| overrideShadersShaderName | string |             |
| overrideShadersMeshName   | string |             |
| forceLod                  | number |             |
| globalLodScale            | number |             |
| shadowDistanceScale       | number |             |
| loadingEnabled            | bool   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MeshSettings](/vext/ref/fb/meshsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshSettings](/vext/ref/fb/meshsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
