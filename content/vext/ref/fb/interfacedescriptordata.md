---
title: InterfaceDescriptorData
---
### Base Classes

[DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InterfaceDescriptorData()                                                          | Create a new instance of this container type.                                                                                         |
| InterfaceDescriptorData(InterfaceDescriptorData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InterfaceDescriptorData([DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) other)        | Upcast an instance of type [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer/) to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/).        |
| InterfaceDescriptorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/). |

## Properties

| Name         | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| inputEvents  | [DynamicEvent](/vext/ref/fb/dynamicevent/)\[\] |             |
| outputEvents | [DynamicEvent](/vext/ref/fb/dynamicevent/)\[\] |             |
| inputLinks   | [DynamicLink](/vext/ref/fb/dynamiclink/)\[\]   |             |
| outputLinks  | [DynamicLink](/vext/ref/fb/dynamiclink/)\[\]   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
