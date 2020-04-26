---
title: NetworkVoteDetails
---

## Summary

### Constructors

|  |
| --- |
| **[NetworkVoteDetails](#constructor-0)**() |
| **[NetworkVoteDetails](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "issuer" >}} | int |
| {{< prop "personal" >}} | bool |
| {{< prop "voteId" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "NetworkVoteDetails" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### NetworkVoteDetails {#constructor-0}

> **NetworkVoteDetails**()

Creates a new [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) frostbite instance.

### NetworkVoteDetails {#constructor-1}

> **NetworkVoteDetails**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "issuer" %}}

> **int**

### {{% prop-heading "personal" %}}

> **bool**

### {{% prop-heading "voteId" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [NetworkVoteDetails](/vext/ref/fb/networkvotedetails)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetworkVoteDetails](/vext/ref/fb/networkvotedetails)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [NetworkVoteDetails](/vext/ref/fb/networkvotedetails) type.

