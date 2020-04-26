---
title: ServerBackendAttributeMapping
---

## Summary

### Constructors

|  |
| --- |
| **[ServerBackendAttributeMapping](#constructor-0)**() |
| **[ServerBackendAttributeMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "attribute" >}} | [ServerBackendAttribute](/vext/ref/fb/serverbackendattribute) |
| {{< prop "setting" >}} | string |
| {{< prop "defaultValue" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ServerBackendAttributeMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ServerBackendAttributeMapping {#constructor-0}

> **ServerBackendAttributeMapping**()

Creates a new [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) frostbite instance.

### ServerBackendAttributeMapping {#constructor-1}

> **ServerBackendAttributeMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "attribute" %}}

> **[ServerBackendAttribute](/vext/ref/fb/serverbackendattribute)**

### {{% prop-heading "setting" %}}

> **string**

### {{% prop-heading "defaultValue" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping) type.

