---
title: AssemblyDescriptorData
---
### Base Classes

[InterfaceDescriptorData](InterfaceDescriptorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AssemblyDescriptorData()                                                          | Create a new instance of this container type.                                                                                       |
| AssemblyDescriptorData(AssemblyDescriptorData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AssemblyDescriptorData([InterfaceDescriptorData](InterfaceDescriptorData) other)  | Upcast an instance of type [InterfaceDescriptorData](InterfaceDescriptorData) to [AssemblyDescriptorData](AssemblyDescriptorData).  |
| AssemblyDescriptorData([DynamicDataContainer](DynamicDataContainer) other)        | Upcast an instance of type [DynamicDataContainer](DynamicDataContainer) to [AssemblyDescriptorData](AssemblyDescriptorData).        |
| AssemblyDescriptorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AssemblyDescriptorData](AssemblyDescriptorData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AssemblyDescriptorData](AssemblyDescriptorData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AssemblyDescriptorData](AssemblyDescriptorData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
