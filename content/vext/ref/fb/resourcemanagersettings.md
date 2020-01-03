---
title: ResourceManagerSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ResourceManagerSettings()                                                          | Create a new instance of this container type.                                                                                         |
| ResourceManagerSettings(ResourceManagerSettings other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ResourceManagerSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [ResourceManagerSettings](ResourceManagerSettings).                    |
| ResourceManagerSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ResourceManagerSettings](ResourceManagerSettings). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| casBundleReadBufferSizeKb       | number |             |
| casBundleDecompressBufferSizeKb | number |             |
| casBundleDecompressBufferCount  | number |             |
| bundleProfilingEnable           | bool   |             |
| spuDecompressEnable             | bool   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ResourceManagerSettings](ResourceManagerSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ResourceManagerSettings](ResourceManagerSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
