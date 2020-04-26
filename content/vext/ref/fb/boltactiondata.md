---
title: BoltActionData
---

## Summary

### Constructors

|  |
| --- |
| **[BoltActionData](#constructor-0)**() |
| **[BoltActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "boltActionDelay" >}} | float |
| {{< prop "boltActionTime" >}} | float |
| {{< prop "holdBoltActionUntilFireRelease" >}} | bool |
| {{< prop "holdBoltActionUntilZoomRelease" >}} | bool |
| {{< prop "forceBoltActionOnFireTrigger" >}} | bool |
| {{< prop "unZoomOnBoltAction" >}} | bool |
| {{< prop "returnToZoomAfterBoltAction" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BoltActionData](/vext/ref/fb/boltactiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoltActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoltActionData {#constructor-0}

> **BoltActionData**()

Creates a new [BoltActionData](/vext/ref/fb/boltactiondata) frostbite instance.

### BoltActionData {#constructor-1}

> **BoltActionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoltActionData](/vext/ref/fb/boltactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "boltActionDelay" %}}

> **float**

### {{% prop-heading "boltActionTime" %}}

> **float**

### {{% prop-heading "holdBoltActionUntilFireRelease" %}}

> **bool**

### {{% prop-heading "holdBoltActionUntilZoomRelease" %}}

> **bool**

### {{% prop-heading "forceBoltActionOnFireTrigger" %}}

> **bool**

### {{% prop-heading "unZoomOnBoltAction" %}}

> **bool**

### {{% prop-heading "returnToZoomAfterBoltAction" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [BoltActionData](/vext/ref/fb/boltactiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BoltActionData](/vext/ref/fb/boltactiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoltActionData](/vext/ref/fb/boltactiondata) type.

