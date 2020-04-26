---
title: PersistentAwardDataStatRef
---

Inherits from [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)

## Summary

### Constructors

|  |
| --- |
| **[PersistentAwardDataStatRef](#constructor-0)**() |
| **[PersistentAwardDataStatRef](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistentAwardDataStatRef](#constructor-2)**(other: [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)) |
| **[PersistentAwardDataStatRef](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "definition" >}} | [AwardData](/vext/ref/fb/awarddata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistentAwardDataStatRef" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistentAwardDataStatRef {#constructor-0}

> **PersistentAwardDataStatRef**()

Creates a new [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref) frostbite instance.

### PersistentAwardDataStatRef {#constructor-1}

> **PersistentAwardDataStatRef**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistentAwardDataStatRef {#constructor-2}

> **PersistentAwardDataStatRef**(other: [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref))

Casts an instance of type [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref) to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref) | The instance to cast to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref). |

### PersistentAwardDataStatRef {#constructor-3}

> **PersistentAwardDataStatRef**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref). |

## Properties

### {{% prop-heading "definition" %}}

> **[AwardData](/vext/ref/fb/awarddata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref) type.

