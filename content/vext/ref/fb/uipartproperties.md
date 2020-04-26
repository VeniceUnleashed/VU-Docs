---
title: UIPartProperties
---

## Summary

### Constructors

|  |
| --- |
| **[UIPartProperties](#constructor-0)**() |
| **[UIPartProperties](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | [UIPartIdentifier](/vext/ref/fb/uipartidentifier) |
| {{< prop "range" >}} | float |
| {{< prop "frequency" >}} | float |
| {{< prop "compensateFreelook" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIPartProperties](/vext/ref/fb/uipartproperties) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIPartProperties" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIPartProperties {#constructor-0}

> **UIPartProperties**()

Creates a new [UIPartProperties](/vext/ref/fb/uipartproperties) frostbite instance.

### UIPartProperties {#constructor-1}

> **UIPartProperties**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIPartProperties](/vext/ref/fb/uipartproperties) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "identifier" %}}

> **[UIPartIdentifier](/vext/ref/fb/uipartidentifier)**

### {{% prop-heading "range" %}}

> **float**

### {{% prop-heading "frequency" %}}

> **float**

### {{% prop-heading "compensateFreelook" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIPartProperties](/vext/ref/fb/uipartproperties)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIPartProperties](/vext/ref/fb/uipartproperties)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIPartProperties](/vext/ref/fb/uipartproperties) type.

