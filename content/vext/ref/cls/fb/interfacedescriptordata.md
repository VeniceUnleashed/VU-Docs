---
title: InterfaceDescriptorData (Frostbite Container)
---
### Base Classes

[DynamicDataContainer](DynamicDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| InterfaceDescriptorData()                                                          | Create a new instance of this container type.                                                                                         |
| InterfaceDescriptorData(InterfaceDescriptorData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| InterfaceDescriptorData([DynamicDataContainer](DynamicDataContainer) other)        | Upcast an instance of type [DynamicDataContainer](DynamicDataContainer) to [InterfaceDescriptorData](InterfaceDescriptorData).        |
| InterfaceDescriptorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InterfaceDescriptorData](InterfaceDescriptorData). |

## Properties

| Name         | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| inputEvents  | [DynamicEvent](DynamicEvent)\[\] |             |
| outputEvents | [DynamicEvent](DynamicEvent)\[\] |             |
| inputLinks   | [DynamicLink](DynamicLink)\[\]   |             |
| outputLinks  | [DynamicLink](DynamicLink)\[\]   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InterfaceDescriptorData](InterfaceDescriptorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InterfaceDescriptorData](InterfaceDescriptorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
