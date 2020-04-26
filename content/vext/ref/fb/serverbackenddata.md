---
title: ServerBackendData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[ServerBackendData](#constructor-0)**() |
| **[ServerBackendData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ServerBackendData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ServerBackendData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mappings" >}} | [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ServerBackendData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ServerBackendData {#constructor-0}

> **ServerBackendData**()

Creates a new [ServerBackendData](/vext/ref/fb/serverbackenddata) frostbite instance.

### ServerBackendData {#constructor-1}

> **ServerBackendData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ServerBackendData](/vext/ref/fb/serverbackenddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ServerBackendData {#constructor-2}

> **ServerBackendData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ServerBackendData](/vext/ref/fb/serverbackenddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ServerBackendData](/vext/ref/fb/serverbackenddata). |

### ServerBackendData {#constructor-3}

> **ServerBackendData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ServerBackendData](/vext/ref/fb/serverbackenddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ServerBackendData](/vext/ref/fb/serverbackenddata). |

## Properties

### {{% prop-heading "mappings" %}}

> **[ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ServerBackendData](/vext/ref/fb/serverbackenddata) type.

