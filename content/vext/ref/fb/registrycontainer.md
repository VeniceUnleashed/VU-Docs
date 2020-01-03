---
title: RegistryContainer
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RegistryContainer()                                                          | Create a new instance of this container type.                                                                             |
| RegistryContainer(RegistryContainer other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RegistryContainer([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RegistryContainer](RegistryContainer). |

## Properties

| Name                    | Type                                                    | Description |
| ----------------------- | ------------------------------------------------------- | ----------- |
| entityRegistry          | [DataContainer](/vext/ref/shared/class/DataContainer)\[\] |             |
| assetRegistry           | [DataContainer](/vext/ref/shared/class/DataContainer)\[\] |             |
| blueprintRegistry       | [DataContainer](/vext/ref/shared/class/DataContainer)\[\] |             |
| referenceObjectRegistry | [DataContainer](/vext/ref/shared/class/DataContainer)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RegistryContainer](RegistryContainer) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RegistryContainer](RegistryContainer) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
