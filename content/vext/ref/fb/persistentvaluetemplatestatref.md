---
title: PersistentValueTemplateStatRef
---
### Base Classes

[AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PersistentValueTemplateStatRef()                                                             | Create a new instance of this container type.                                                                                                          |
| PersistentValueTemplateStatRef(PersistentValueTemplateStatRef other)                         | Create a reference copy of an instance of the same type.                                                                                               |
| PersistentValueTemplateStatRef([AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) other) | Upcast an instance of type [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) to [PersistentValueTemplateStatRef](/vext/ref/fb/persistentvaluetemplatestatref/). |
| PersistentValueTemplateStatRef([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentValueTemplateStatRef](/vext/ref/fb/persistentvaluetemplatestatref/).    |

## Properties

| Name       | Type                                               | Description |
| ---------- | -------------------------------------------------- | ----------- |
| definition | [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentValueTemplateStatRef](/vext/ref/fb/persistentvaluetemplatestatref/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistentValueTemplateStatRef](/vext/ref/fb/persistentvaluetemplatestatref/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
