---
title: ConceptCache (Client Class)
---
## Description

## Constructors

| Constructor                                                                                                  | Description                                              |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [ConceptCache](/vext/ref/cls/clt/conceptcache)()                                                          |                                                          |
| [ConceptCache](/vext/ref/cls/clt/conceptcache)([ConceptCache](/vext/ref/cls/clt/conceptcache) **ref**) | Create a reference copy of an instance of the same type. |

## Operators

| Operator | Parameters                                                                     |
| -------- | ------------------------------------------------------------------------------ |
| \[\]     | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **key** |

## Methods

| Type  | Name                  | Parameters                                                                                             |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| float | [GetLevel](#getlevel) | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**                  |
| void  | [SetLevel](#setlevel) | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**, float **level** |

### GetLevel

> float **GetLevel**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |

### SetLevel

> void **SetLevel**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**, float **level**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |
| level      | float                                                                  |             |
