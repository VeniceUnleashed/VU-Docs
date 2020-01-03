---
title: AssemblyDescriptorData
---
### Base Classes

[InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AssemblyDescriptorData()                                                          | Create a new instance of this container type.                                                                                       |
| AssemblyDescriptorData(AssemblyDescriptorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AssemblyDescriptorData([InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/) other)  | Upcast an instance of type [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/) to [AssemblyDescriptorData](/vext/ref/fb/assemblydescriptordata/).  |
| AssemblyDescriptorData([DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) other)        | Upcast an instance of type [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) to [AssemblyDescriptorData](/vext/ref/fb/assemblydescriptordata/).        |
| AssemblyDescriptorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AssemblyDescriptorData](/vext/ref/fb/assemblydescriptordata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AssemblyDescriptorData](/vext/ref/fb/assemblydescriptordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AssemblyDescriptorData](/vext/ref/fb/assemblydescriptordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
