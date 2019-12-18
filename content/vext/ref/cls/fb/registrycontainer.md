---
title: RegistryContainer (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RegistryContainer()                                                          | Create a new instance of this container type.                                                                             |
| RegistryContainer(RegistryContainer other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RegistryContainer([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RegistryContainer](RegistryContainer). |

## Properties

| Name                    | Type                                                    | Description |
| ----------------------- | ------------------------------------------------------- | ----------- |
| entityRegistry          | [DataContainer](/vext/ref/cls/shr/DataContainer)\[\] |             |
| assetRegistry           | [DataContainer](/vext/ref/cls/shr/DataContainer)\[\] |             |
| blueprintRegistry       | [DataContainer](/vext/ref/cls/shr/DataContainer)\[\] |             |
| referenceObjectRegistry | [DataContainer](/vext/ref/cls/shr/DataContainer)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RegistryContainer](RegistryContainer) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RegistryContainer](RegistryContainer) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
