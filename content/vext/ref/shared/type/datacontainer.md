---
title: DataContainer
---

A base frostbite [DataContainer](/vext/ref/shared/type/datacontainer), the highest class in the Frostbite container instance hierarchy. All instances present in game data partitions (ebx) are derived from this type.

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "typeInfo" true >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |
| {{< prop "isLazyLoaded" true >}} | bool |
| {{< prop "isReadOnly" true >}} | bool |
| {{< prop "instanceGuid" true >}} | [Guid](/vext/ref/shared/type/guid) \| nil |
| {{< prop "partitionGuid" true >}} | [Guid](/vext/ref/shared/type/guid) \| nil |
| {{< prop "partition" true >}} | [DatabasePartition](/vext/ref/shared/type/databasepartition) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Is](#is)**(typeName: string) | bool |
| **[Eq](#eq)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) | bool |
| **[AsDC](#asdc)**() | [DataContainer](/vext/ref/shared/type/datacontainer) |
| **[Clone](#clone)**() | [DataContainer](/vext/ref/shared/type/datacontainer) |
| **[Clone](#clone-1)**(guid: [Guid](/vext/ref/shared/type/guid)) | [DataContainer](/vext/ref/shared/type/datacontainer) |
| **[ReplaceReferences](#replacereferences)**(with: [DataContainer](/vext/ref/shared/type/datacontainer) \| nil) | void |
| **[MakeWritable](#makewritable)**() | void |
| **[RegisterLoadHandler](#registerloadhandler)**(callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil |
| **[RegisterLoadHandler](#registerloadhandler-1)**(context: any, callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil |
| **[RegisterLoadHandlerOnce](#registerloadhandleronce)**(callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil |
| **[RegisterLoadHandlerOnce](#registerloadhandleronce-1)**(context: any, callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Properties

### {{% prop-heading "typeInfo" true %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

Type information for this instance. You can get the specific type of this instance via `instance.typeInfo.name`.

### {{% prop-heading "isLazyLoaded" true %}}

> **bool**

Indicates whether this instance is being lazy-loaded.

### {{% prop-heading "isReadOnly" true %}}

> **bool**

Indicates whether this instance is read-only, which is the case for instances loaded from data. Changes to read-only instances will throw an error.

### {{% prop-heading "instanceGuid" true %}}

> **[Guid](/vext/ref/shared/type/guid)** \| **nil**

The [Guid](/vext/ref/shared/type/guid) of this instance, if it has one assigned to it.

### {{% prop-heading "partitionGuid" true %}}

> **[Guid](/vext/ref/shared/type/guid)** \| **nil**

The [Guid](/vext/ref/shared/type/guid) of the partition that contains this instance, if there is one. Only instances loaded from data are inside partitions.

### {{% prop-heading "partition" true %}}

> **[DatabasePartition](/vext/ref/shared/type/databasepartition)** \| **nil**

The [DatabasePartition](/vext/ref/shared/type/databasepartition) that contains this instance, if there is one. Only instances loaded from data are inside partitions.

## Methods

### Is {#is}

> **Is**(typeName: string): bool

Checks if an instance is of a specific type. This will return `true` for matching child types too (eg. calling `:Is('Asset')` on a [SoundAsset](/vext/ref/fb/soundasset) will return `true`).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **typeName** | string | The type name to check against. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** | Whether this instance is of the provided type. |

### Eq {#eq}

> **Eq**(other: [DataContainer](/vext/ref/shared/type/datacontainer)): bool

Checks if two instances are pointing to the same data. This performs reference equality checks, not value equality.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to check against. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** | Whether this instance points to the same data as `other`. |

### AsDC {#asdc}

> **AsDC**(): [DataContainer](/vext/ref/shared/type/datacontainer)

Returns a reference to the same instance as a [DataContainer](/vext/ref/shared/type/datacontainer) type. This is usually helpful when you have to upcast a more generic type to make it match the type definition of a property or an array.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** | The same instance but upcasted to a [DataContainer](/vext/ref/shared/type/datacontainer). |

### Clone {#clone}

> **Clone**(): [DataContainer](/vext/ref/shared/type/datacontainer)

Creates a shallow clone of this instance, which is essentially the equivalent of creating a new instance of the same type and assigning the values of this instance to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** | The newly created instance. |

### Clone {#clone-1}

> **Clone**(guid: [Guid](/vext/ref/shared/type/guid)): [DataContainer](/vext/ref/shared/type/datacontainer)

Creates a shallow clone of this instance and assigns it the provided [Guid](/vext/ref/shared/type/guid), which is essentially the equivalent of creating a new instance of the same type with the provided [Guid](/vext/ref/shared/type/guid) and assigning the values of this instance to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the cloned instance. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** | The newly created instance. |

### ReplaceReferences {#replacereferences}

> **ReplaceReferences**(with: [DataContainer](/vext/ref/shared/type/datacontainer) \| nil)

Replaces all registered references to the current instance with references to the provided instance. Passing `nil` will clear all references to this instance.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **with** | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil | The instance to set the references to, or `nil` to clear them. |

### MakeWritable {#makewritable}

> **MakeWritable**()

Makes a read-only instance writable. This is useful for modifying loaded game data. As this is a quite expensive operation, it is recommended to only use it on instances you plan to modify.

### RegisterLoadHandler {#registerloadhandler}

> **RegisterLoadHandler**(callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil

Registers a callback that will be called once this lazy-loaded instance has finished loading. The callback will keep getting called between level loads.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(instance: DataContainer)`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** \| **nil** | A callback handle that can be used to deregister the callback, or `nil` if this instance is not lazy-loaded. |

### RegisterLoadHandler {#registerloadhandler-1}

> **RegisterLoadHandler**(context: any, callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil

Registers a callback that will be called once this lazy-loaded instance has finished loading. The callback will keep getting called between level loads.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | The context to pass to the provided callback. |
| **callback** | callable | A callback in the form `function(context: any, instance: DataContainer)`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** \| **nil** | A callback handle that can be used to deregister the callback, or `nil` if this instance is not lazy-loaded. |

### RegisterLoadHandlerOnce {#registerloadhandleronce}

> **RegisterLoadHandlerOnce**(callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil

Registers a callback that will be called once this lazy-loaded instance has finished loading. The callback will get called once and then get automatically deregistered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(instance: DataContainer)`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** \| **nil** | A callback handle that can be used to deregister the callback, or `nil` if this instance is not lazy-loaded. |

### RegisterLoadHandlerOnce {#registerloadhandleronce-1}

> **RegisterLoadHandlerOnce**(context: any, callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil

Registers a callback that will be called once this lazy-loaded instance has finished loading. The callback will get called once and then get automatically deregistered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | The context to pass to the provided callback. |
| **callback** | callable | A callback in the form `function(context: any, instance: DataContainer)`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** \| **nil** | A callback handle that can be used to deregister the callback, or `nil` if this instance is not lazy-loaded. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataContainer](/vext/ref/shared/type/datacontainer) type.

