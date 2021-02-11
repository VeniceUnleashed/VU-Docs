---
title: EntityCreationParams
---

## Summary

### Constructors

|  |
| --- |
| **[EntityCreationParams](#constructor-0)**() |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "variationNameHash" >}} | int |
| {{< prop "networked" >}} | bool |
| {{< prop "parentRepresentative" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |

## Constructors

### EntityCreationParams {#constructor-0}

> **EntityCreationParams**()

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "variationNameHash" %}}

> **int**

### {{% prop-heading "networked" %}}

> **bool**

### {{% prop-heading "parentRepresentative" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

Data ([ReferenceObjectData](/vext/ref/fb/referenceobjectdata)) that represents the parent of this blueprint. Specifying this in combination with a custom [IndexInBlueprint](/vext/ref/fb/indexinblueprint) can be used to provide proper replication between entities spawned on the server and the client.

