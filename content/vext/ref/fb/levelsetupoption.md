---
title: LevelSetupOption
---

## Summary

### Constructors

|  |
| --- |
| **[LevelSetupOption](#constructor-0)**() |
| **[LevelSetupOption](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "criterion" >}} | string |
| {{< prop "value" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LevelSetupOption](/vext/ref/fb/levelsetupoption) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LevelSetupOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LevelSetupOption {#constructor-0}

> **LevelSetupOption**()

Creates a new [LevelSetupOption](/vext/ref/fb/levelsetupoption) frostbite instance.

### LevelSetupOption {#constructor-1}

> **LevelSetupOption**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LevelSetupOption](/vext/ref/fb/levelsetupoption) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "criterion" %}}

> **string**

### {{% prop-heading "value" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [LevelSetupOption](/vext/ref/fb/levelsetupoption)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LevelSetupOption](/vext/ref/fb/levelsetupoption)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LevelSetupOption](/vext/ref/fb/levelsetupoption) type.

