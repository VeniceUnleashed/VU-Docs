---
title: SimpleAnimationControlBinding
---

## Summary

### Constructors

|  |
| --- |
| **[SimpleAnimationControlBinding](#constructor-0)**() |
| **[SimpleAnimationControlBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "locoTarget" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SimpleAnimationControlBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SimpleAnimationControlBinding {#constructor-0}

> **SimpleAnimationControlBinding**()

Creates a new [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding) frostbite instance.

### SimpleAnimationControlBinding {#constructor-1}

> **SimpleAnimationControlBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "locoTarget" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding) type.

