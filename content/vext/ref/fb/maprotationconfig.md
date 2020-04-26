---
title: MapRotationConfig
---

## Summary

### Constructors

|  |
| --- |
| **[MapRotationConfig](#constructor-0)**() |
| **[MapRotationConfig](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mapRotationId" >}} | int |
| {{< prop "nameSid" >}} | string |
| {{< prop "descSid" >}} | string |
| {{< prop "mod" >}} | string |
| {{< prop "gameMode" >}} | string |
| {{< prop "randomizeStartingMap" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MapRotationConfig](/vext/ref/fb/maprotationconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MapRotationConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MapRotationConfig {#constructor-0}

> **MapRotationConfig**()

Creates a new [MapRotationConfig](/vext/ref/fb/maprotationconfig) frostbite instance.

### MapRotationConfig {#constructor-1}

> **MapRotationConfig**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MapRotationConfig](/vext/ref/fb/maprotationconfig) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "mapRotationId" %}}

> **int**

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "descSid" %}}

> **string**

### {{% prop-heading "mod" %}}

> **string**

### {{% prop-heading "gameMode" %}}

> **string**

### {{% prop-heading "randomizeStartingMap" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MapRotationConfig](/vext/ref/fb/maprotationconfig)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MapRotationConfig](/vext/ref/fb/maprotationconfig)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MapRotationConfig](/vext/ref/fb/maprotationconfig) type.

