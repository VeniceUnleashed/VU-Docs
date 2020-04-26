---
title: AbstractPersistenceData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AbstractPersistenceData](#constructor-0)**() |
| **[AbstractPersistenceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AbstractPersistenceData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AbstractPersistenceData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AbstractPersistenceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AbstractPersistenceData {#constructor-0}

> **AbstractPersistenceData**()

Creates a new [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) frostbite instance.

### AbstractPersistenceData {#constructor-1}

> **AbstractPersistenceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AbstractPersistenceData {#constructor-2}

> **AbstractPersistenceData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata). |

### AbstractPersistenceData {#constructor-3}

> **AbstractPersistenceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) type.

