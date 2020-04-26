---
title: CreateDestructionVolumeParams
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CreateDestructionVolumeParams](#constructor-0)**() |
| **[CreateDestructionVolumeParams](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CreateDestructionVolumeParams](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "assetName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CreateDestructionVolumeParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CreateDestructionVolumeParams {#constructor-0}

> **CreateDestructionVolumeParams**()

Creates a new [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams) frostbite instance.

### CreateDestructionVolumeParams {#constructor-1}

> **CreateDestructionVolumeParams**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CreateDestructionVolumeParams {#constructor-2}

> **CreateDestructionVolumeParams**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams). |

## Properties

### {{% prop-heading "assetName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CreateDestructionVolumeParams](/vext/ref/fb/createdestructionvolumeparams) type.

