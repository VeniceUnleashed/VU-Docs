---
title: CreateRawFileParams
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CreateRawFileParams](#constructor-0)**() |
| **[CreateRawFileParams](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CreateRawFileParams](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "assetName" >}} | string |
| {{< prop "sourceFile" >}} | string |
| {{< prop "createResource" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CreateRawFileParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CreateRawFileParams {#constructor-0}

> **CreateRawFileParams**()

Creates a new [CreateRawFileParams](/vext/ref/fb/createrawfileparams) frostbite instance.

### CreateRawFileParams {#constructor-1}

> **CreateRawFileParams**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CreateRawFileParams](/vext/ref/fb/createrawfileparams) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CreateRawFileParams {#constructor-2}

> **CreateRawFileParams**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CreateRawFileParams](/vext/ref/fb/createrawfileparams). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CreateRawFileParams](/vext/ref/fb/createrawfileparams). |

## Properties

### {{% prop-heading "assetName" %}}

> **string**

### {{% prop-heading "sourceFile" %}}

> **string**

### {{% prop-heading "createResource" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CreateRawFileParams](/vext/ref/fb/createrawfileparams) type.

