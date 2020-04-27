---
title: DatabasePartition
---

A frostbite database partition. Partitions represent game-data bound structures (ebx).

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "instances" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer){} |
| {{< prop "guid" true >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "primaryInstance" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) |
| {{< prop "name" true >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[FindInstance](#findinstance)**(guid: [Guid](/vext/ref/shared/type/guid)) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[ReplaceInstance](#replaceinstance)**(instance: [DataContainer](/vext/ref/shared/type/datacontainer), replacement: [DataContainer](/vext/ref/shared/type/datacontainer), replaceReferences: bool = true) | void |
| **[AddInstance](#addinstance)**(instance: [DataContainer](/vext/ref/shared/type/datacontainer)) | void |
| **[RemoveInstance](#removeinstance)**(instance: [DataContainer](/vext/ref/shared/type/datacontainer)) | void |

## Properties

### {{% prop-heading "instances" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**{}

A table holding all the instances contained within this partition.

### {{% prop-heading "guid" true %}}

> **[Guid](/vext/ref/shared/type/guid)**

The [Guid](/vext/ref/shared/type/guid) of this partition.

### {{% prop-heading "primaryInstance" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**

The primary instance of this partition.

### {{% prop-heading "name" true %}}

> **string**

The name of this partition. Ususally corresponds to the relative filename of the original file.

## Methods

### FindInstance {#findinstance}

> **FindInstance**(guid: [Guid](/vext/ref/shared/type/guid)): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

Tries to find and retrieve an instance with a matching `guid` from the current partition.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) of the instance to find. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### ReplaceInstance {#replaceinstance}

> **ReplaceInstance**(instance: [DataContainer](/vext/ref/shared/type/datacontainer), replacement: [DataContainer](/vext/ref/shared/type/datacontainer), replaceReferences: bool = true)

Replaces an `instance` within this partition with another `replacement` instance. When `replaceReferences` is set to `true` (default), VeniceEXT also calls [DataContainer](/vext/ref/shared/type/datacontainer)::ReplaceReferences on the original instance, replacing all references to it with its replacement.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **instance** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to replace. |
| **replacement** | [DataContainer](/vext/ref/shared/type/datacontainer) | The replacement instance. |
| **replaceReferences** | bool | Whether to replace all references of the original instance with the replacement. Defaults to `true`. |

### AddInstance {#addinstance}

> **AddInstance**(instance: [DataContainer](/vext/ref/shared/type/datacontainer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **instance** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |

### RemoveInstance {#removeinstance}

> **RemoveInstance**(instance: [DataContainer](/vext/ref/shared/type/datacontainer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **instance** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |

