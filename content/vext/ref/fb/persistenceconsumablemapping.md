---
title: PersistenceConsumableMapping
---

## Summary

### Constructors

|  |
| --- |
| **[PersistenceConsumableMapping](#constructor-0)**() |
| **[PersistenceConsumableMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "group" >}} | [ConsumableGroup](/vext/ref/fb/consumablegroup) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistenceConsumableMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceConsumableMapping {#constructor-0}

> **PersistenceConsumableMapping**()

Creates a new [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) frostbite instance.

### PersistenceConsumableMapping {#constructor-1}

> **PersistenceConsumableMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "group" %}}

> **[ConsumableGroup](/vext/ref/fb/consumablegroup)**

## Methods

### Clone {#clone}

> **Clone**(): [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping) type.

